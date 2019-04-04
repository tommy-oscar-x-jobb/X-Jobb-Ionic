import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import * as HighCharts from 'highcharts';
import {
  getMonthleyData,
  getDaylyAvrageData,
  getAllData,
  parseMonthleyData,
  parseDaylyAvrageData,
  parseAllData,
  getIOSData
} from '../src/getData';
import {getGraph} from '../src/getGraph';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  yourArray = [];
  constructor(public navCtrl: NavController) {}

  addLogg(logg) {
    this.yourArray.push(logg)
  }

  async parsingExperiment1(){
    var data = await getMonthleyData();
    const startTime = new Date().getTime(); // Start timestamp for parsing
    var logg = "Start Parsing";
    this.addLogg(logg);

    var parsedData = parseMonthleyData(data);
    const parsingTimeStamp = new Date().getTime(); // Final timestamp for parsing
    logg = "Parsing Finished";
    this.addLogg(logg);
    logg = "Time elapsed: " + (parsingTimeStamp - startTime);  // Timeresult for parsing
    this.addLogg(logg);

  }

  async parsingExperiment2(){
    var data = await getDaylyAvrageData();
    const startTime = new Date().getTime();
    var logg = "Start Parsing";
    this.addLogg(logg);

    var parsedData = parseDaylyAvrageData(data);
    const parsingTimeStamp = new Date().getTime();
    logg = "Parsing Finished";
    this.addLogg(logg);
    logg = "Time elapsed: " + (parsingTimeStamp - startTime);
    this.addLogg(logg);

  }

  async parsingExperiment3(){
    var data = await getIOSData();
    const startTime = new Date().getTime();
    var logg = "Start Parsing";
    this.addLogg(logg);

    var parsedData = parseAllData(data);
    const parsingTimeStamp = new Date().getTime();
    logg = "Parsing Finished";
    this.addLogg(logg);
    logg = "Time elapsed: " + (parsingTimeStamp - startTime);
    this.addLogg(logg);

  }

  async graphExperiment1(){
    var data = await getMonthleyData();

    var parsedData = parseMonthleyData(data);

    const rederingTimeStamp = new Date().getTime();

    var logg = "Start rendering graph, timestamp: " + rederingTimeStamp; // Start timestamp for rendering
    this.addLogg(logg);                                             // End timestamp is written on graph

    var title = "Average monthly temperatures between 1961-2018";
    var myChart = getGraph(parsedData, title);

  }
  async graphExperiment2(){
    var data = await getDaylyAvrageData();

    var parsedData = parseDaylyAvrageData(data);

    const rederingTimeStamp = new Date().getTime();

    var logg = "Start rendering graph, timestamp: " + rederingTimeStamp; // Start timestamp for rendering
    this.addLogg(logg);                                             // End timestamp is written on graph

    var title = "Average daily temperatures between 1961-2018";
    var myChart = getGraph(parsedData, title);

  }
  async graphExperiment3(){
    var data = await getIOSData();

    var parsedData = parseAllData(data);

    const rederingTimeStamp = new Date().getTime();

    var logg = "Start rendering graph, timestamp: " + rederingTimeStamp; // Start timestamp for rendering
    this.addLogg(logg);                                             // End timestamp is written on graph

    var title = "Daily temperatures between 1961-2018";
    var myChart = getGraph(parsedData, title);

  }

}
