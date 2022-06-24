import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";

import { Doughnut } from "react-chartjs-2";
import useStyles from "./styles";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';



import useTransactions from "../../useTransactions";

export const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartDaTa } = useTransactions(title);

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        {/* <Doughnut data={chartDaTa} /> */}
        <Chart type='doughnut' data={chartDaTa} />

      </CardContent>
    </Card>
  );
};
