import React, {useEffect, useState} from 'react';
import Start from './Start';

import {selectedLang} from '../hooks/infoHooks';
import wordData from '../src/assets/EsWords.json';
import ArticleBox from '../src/assets/components/ArticleBox';
import {Box, Button, Grid, Paper, Stack, Typography} from '@mui/material';

let rounds = 0;
let answer = '';

// artikkeliBoksin sana
let randIndex = Math.floor(Math.random() * (wordData.length - 1) + 1);
let word = wordData[randIndex].word.split(' ');
console.log('sana: ', word);

const pickNextBox = () => {
  let nextBox = 'articleBox';

  if (nextBox == 'articleBox') {
    return (
      <>
        <Paper elevation={7} sx={{minWidth: '50%', maxWidth: '55%', m: 'auto'}}>
          <ArticleBox
            questionWord={word[1]}
            questionArticle={word[0]}
          ></ArticleBox>
          <Grid
            display={'flex'}
            flexWrap={'wrap'}
            justifyContent={'space-evenly'}
            sx={{height: '100%', p: 2, ml: '25%', mr: '25%'}}
          >
            <Paper elevation={5}>
              <Button
                variant="text"
                onClick={() => {
                  answer = 'un';
                  console.log('vastaus: ', answer);
                }}
              >
                <Typography component="h4" variant="h4">
                  un
                </Typography>
              </Button>
            </Paper>

            <Paper elevation={5} sx={{}}>
              <Button
                variant="text"
                onClick={() => {
                  answer = 'una';
                  console.log('vastaus: ', answer);
                }}
              >
                <Typography component="h4" variant="h4">
                  una
                </Typography>
              </Button>
            </Paper>
          </Grid>
        </Paper>
      </>
    );
  } else if (nextBox == 'caseBox') {
    return <Paper elevation={3}>caseBox</Paper>;
  }
};

const Game = () => {
  let [roundsState, setRoundsState] = useState(0);

  if (roundsState == 0) {
    useEffect(() => {
      setRoundsState(roundsState++);
    }, []);
    return <Box>{pickNextBox()}</Box>;
  } else if (answer == word[0]) {
    useEffect(() => {
      setRoundsState(roundsState++);
    }, []);
    console.log('word: ', word[0]);
    console.log('answer: ', answer);
    console.log('randIndex: ', randIndex);
    randIndex = Math.floor(Math.random() * (wordData.length - 1) + 1);
    word = wordData[randIndex].word.split(' ');

    // TODO: arvotaan seuraava laatikko
    nextBox = 'articleBox';
    rounds++;
    console.log(rounds);
    return <Box>{pickNextBox()}</Box>;
  }
};

export default Game;
