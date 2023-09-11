import styles from '../styles/Home.module.css';

export const checkTeam = (teamName, playerTeam) => {
  if (teamName === null) {
    return;
  }

  // If team is correct
  if (teamName === playerTeam) {
    return styles.correctGuess;
  }
  // If the team is incorrect
  else {
    return styles.fade;
  }
};

export const checkAge = (age, playerAge) => {
  if (age === null) {
    return;
  }

  // If age is correct
  const upperAge = playerAge + 2;
  const lowerAge = playerAge - 2;
  if (age === playerAge) {
    return styles.correctGuess;
  }
  else if (age <= upperAge && age >= lowerAge) {
    return styles.closeGuess;
  }
  else {
    return styles.fade;
  }
};

export const checkPts = (pts, playerPts) => {
  if (pts === null) {
    return;
  }

  const upperPts = playerPts + 2;
  const lowerPts = playerPts - 2;
  if (pts === playerPts) {
    return styles.correctGuess;
  }
  else if (pts <= upperPts && pts >= lowerPts) {
    return styles.closeGuess;
  }
  else {
    return styles.fade;
  }
};

export const checkNo = (no, playerNo) => {
  if (no === null) {
    return;
  }

  const upperNo = playerNo + 1;
  const lowerNo = playerNo - 1;
  if (no === playerNo) {
    return styles.correctGuess;
  }
  else if (no <= upperNo && no >= lowerNo) {
    return styles.closeGuess;
  }
  else {
    return styles.fade;
  }
};

export const checkDraftNo = (draftNo, playerDraftNo) => {
  if (draftNo === null) {
    return;
  }

  const upperDraftNo = playerDraftNo + 1;
  const lowerDraftNo = playerDraftNo - 1;
  if (draftNo === playerDraftNo) {
    return styles.correctGuess;
  }
  else if (draftNo <= upperDraftNo && draftNo >= lowerDraftNo) {
    return styles.closeGuess;
  }
  else {
    return styles.fade;
  }
};
