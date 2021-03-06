import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Question from '../questions/Question';
import Answer from '../answers/Answer';
import Button from '@material-ui/core/Button';
import './tests.styles.scss';

export class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        {
          idtest: 'M09AL0101',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL01',
          denumireserie: 'Operatii cu numere intregi',
          enunt: 'EM09AL0101',
          var1: 'V1M09AL0101',
          var2: 'V2M09AL0101',
          var3: 'V3M09AL0101',
          var4: 'V4M09AL0101',
          raspuns: 'RM09AL0101',
          path: '09/AL/M09AL01/',
        },
        {
          idtest: 'M09AL0102',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL01',
          denumireserie: 'Operatii cu numere intregi',
          enunt: 'EM09AL0102',
          var1: 'V1M09AL0102',
          var2: 'V2M09AL0102',
          var3: 'V3M09AL0102',
          var4: 'V4M09AL0102',
          raspuns: 'RM09AL0102',
          path: '09/AL/M09AL01/',
        },
        {
          idtest: 'M09AL0103',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL01',
          denumireserie: 'Operatii cu numere intregi',
          enunt: 'EM09AL0103',
          var1: 'V1M09AL0103',
          var2: 'V2M09AL0103',
          var3: 'V3M09AL0103',
          var4: 'V4M09AL0103',
          raspuns: 'RM09AL0103',
          path: '09/AL/M09AL01/',
        },
        {
          idtest: 'M09AL0104',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL01',
          denumireserie: 'Operatii cu numere intregi',
          enunt: 'EM09AL0104',
          var1: 'V1M09AL0104',
          var2: 'V2M09AL0104',
          var3: 'V3M09AL0104',
          var4: 'V4M09AL0104',
          raspuns: 'RM09AL0104',
          path: '09/AL/M09AL01/',
        },
        {
          idtest: 'M09AL0201',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL02',
          denumireserie: 'Formule de calcul prescurtat',
          enunt: 'EM09AL0201',
          var1: 'V1M09AL0201',
          var2: 'V2M09AL0201',
          var3: 'V3M09AL0201',
          var4: 'V4M09AL0201',
          raspuns: 'RM09AL0201',
          path: '09/AL/M09AL02/',
        },
        {
          idtest: 'M09AL0202',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL02',
          denumireserie: 'Formule de calcul prescurtat',
          enunt: 'EM09AL0202',
          var1: 'V1M09AL0202',
          var2: 'V2M09AL0202',
          var3: 'V3M09AL0202',
          var4: 'V4M09AL0202',
          raspuns: 'RM09AL0202',
          path: '09/AL/M09AL02/',
        },
        {
          idtest: 'M09AL0203',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL02',
          denumireserie: 'Formule de calcul prescurtat',
          enunt: 'EM09AL0203',
          var1: 'V1M09AL0203',
          var2: 'V2M09AL0203',
          var3: 'V3M09AL0203',
          var4: 'V4M09AL0203',
          raspuns: 'RM09AL0203',
          path: '09/AL/M09AL02/',
        },
        {
          idtest: 'M09AL0204',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL02',
          denumireserie: 'Formule de calcul prescurtat',
          enunt: 'EM09AL0204',
          var1: 'V1M09AL0204',
          var2: 'V2M09AL0204',
          var3: 'V3M09AL0204',
          var4: 'V4M09AL0204',
          raspuns: 'RM09AL0204',
          path: '09/AL/M09AL02/',
        },
        {
          idtest: 'M09AL0205',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL02',
          denumireserie: 'Formule de calcul prescurtat',
          enunt: 'EM09AL0205',
          var1: 'V1M09AL0205',
          var2: 'V2M09AL0205',
          var3: 'V3M09AL0205',
          var4: 'V4M09AL0205',
          raspuns: 'RM09AL0205',
          path: '09/AL/M09AL02/',
        },
        {
          idtest: 'M09AL0206',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL02',
          denumireserie: 'Formule de calcul prescurtat',
          enunt: 'EM09AL0206',
          var1: 'V1M09AL0206',
          var2: 'V2M09AL0206',
          var3: 'V3M09AL0206',
          var4: 'V4M09AL0206',
          raspuns: 'RM09AL0206',
          path: '09/AL/M09AL02/',
        },
        {
          idtest: 'M09AL0207',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL02',
          denumireserie: 'Formule de calcul prescurtat',
          enunt: 'EM09AL0207',
          var1: 'V1M09AL0207',
          var2: 'V2M09AL0207',
          var3: 'V3M09AL0207',
          var4: 'V4M09AL0207',
          raspuns: 'RM09AL0207',
          path: '09/AL/M09AL02/',
        },
        {
          idtest: 'M09AL0301',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL03',
          denumireserie: 'Ecuatia de gradul al II-lea',
          enunt: 'EM09AL0301',
          var1: 'V1M09AL0301',
          var2: 'V2M09AL0301',
          var3: 'V3M09AL0301',
          var4: 'V4M09AL0301',
          raspuns: 'RM09AL0301',
          path: '09/AL/M09AL03/',
        },
        {
          idtest: 'M09AL0302',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL03',
          denumireserie: 'Ecuatia de gradul al II-lea',
          enunt: 'EM09AL0302',
          var1: 'V1M09AL0302',
          var2: 'V2M09AL0302',
          var3: 'V3M09AL0302',
          var4: 'V4M09AL0302',
          raspuns: 'RM09AL0302',
          path: '09/AL/M09AL03/',
        },
        {
          idtest: 'M09AL0303',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL03',
          denumireserie: 'Ecuatia de gradul al II-lea',
          enunt: 'EM09AL0303',
          var1: 'V1M09AL0303',
          var2: 'V2M09AL0303',
          var3: 'V3M09AL0303',
          var4: 'V4M09AL0303',
          raspuns: 'RM09AL0303',
          path: '09/AL/M09AL03/',
        },
        {
          idtest: 'M09AL0304',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL03',
          denumireserie: 'Ecuatia de gradul al II-lea',
          enunt: 'EM09AL0304',
          var1: 'V1M09AL0304',
          var2: 'V2M09AL0304',
          var3: 'V3M09AL0304',
          var4: 'V4M09AL0304',
          raspuns: 'RM09AL0304',
          path: '09/AL/M09AL03/',
        },
        {
          idtest: 'M09AL0305',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL03',
          denumireserie: 'Ecuatia de gradul al II-lea',
          enunt: 'EM09AL0305',
          var1: 'V1M09AL0305',
          var2: 'V2M09AL0305',
          var3: 'V3M09AL0305',
          var4: 'V4M09AL0305',
          raspuns: 'RM09AL0305',
          path: '09/AL/M09AL03/',
        },
        {
          idtest: 'M09AL0306',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL03',
          denumireserie: 'Ecuatia de gradul al II-lea',
          enunt: 'EM09AL0306',
          var1: 'V1M09AL0306',
          var2: 'V2M09AL0306',
          var3: 'V3M09AL0306',
          var4: 'V4M09AL0306',
          raspuns: 'RM09AL0306',
          path: '09/AL/M09AL03/',
        },
        {
          idtest: 'M09AL0401',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL04',
          denumireserie: 'Relatiile lui Viete',
          enunt: 'EM09AL0401',
          var1: 'V1M09AL0401',
          var2: 'V2M09AL0401',
          var3: 'V3M09AL0401',
          var4: 'V4M09AL0401',
          raspuns: 'RM09AL0401',
          path: '09/AL/M09AL04/',
        },
        {
          idtest: 'M09AL0402',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL04',
          denumireserie: 'Relatiile lui Viete',
          enunt: 'EM09AL0402',
          var1: 'V1M09AL0402',
          var2: 'V2M09AL0402',
          var3: 'V3M09AL0402',
          var4: 'V4M09AL0402',
          raspuns: 'RM09AL0402',
          path: '09/AL/M09AL04/',
        },
        {
          idtest: 'M09AL0403',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL04',
          denumireserie: 'Relatiile lui Viete',
          enunt: 'EM09AL0403',
          var1: 'V1M09AL0403',
          var2: 'V2M09AL0403',
          var3: 'V3M09AL0403',
          var4: 'V4M09AL0403',
          raspuns: 'RM09AL0403',
          path: '09/AL/M09AL04/',
        },
        {
          idtest: 'M09AL0404',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL04',
          denumireserie: 'Relatiile lui Viete',
          enunt: 'EM09AL0404',
          var1: 'V1M09AL0404',
          var2: 'V2M09AL0404',
          var3: 'V3M09AL0404',
          var4: 'V4M09AL0404',
          raspuns: 'RM09AL0404',
          path: '09/AL/M09AL04/',
        },
        {
          idtest: 'M09AL0405',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL04',
          denumireserie: 'Relatiile lui Viete',
          enunt: 'EM09AL0405',
          var1: 'V1M09AL0405',
          var2: 'V2M09AL0405',
          var3: 'V3M09AL0405',
          var4: 'V4M09AL0405',
          raspuns: 'RM09AL0405',
          path: '09/AL/M09AL04/',
        },
        {
          idtest: 'M09AL0406',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL04',
          denumireserie: 'Relatiile lui Viete',
          enunt: 'EM09AL0406',
          var1: 'V1M09AL0406',
          var2: 'V2M09AL0406',
          var3: 'V3M09AL0406',
          var4: 'V4M09AL0406',
          raspuns: 'RM09AL0406',
          path: '09/AL/M09AL04/',
        },
        {
          idtest: 'M09AL0407',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL04',
          denumireserie: 'Relatiile lui Viete',
          enunt: 'EM09AL0407',
          var1: 'V1M09AL0407',
          var2: 'V2M09AL0407',
          var3: 'V3M09AL0407',
          var4: 'V4M09AL0407',
          raspuns: 'RM09AL0407',
          path: '09/AL/M09AL04/',
        },
        {
          idtest: 'M09AL0501',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL05',
          denumireserie: 'Progresie aritmetica',
          enunt: 'EM09AL0501',
          var1: 'V1M09AL0501',
          var2: 'V2M09AL0501',
          var3: 'V3M09AL0501',
          var4: 'V4M09AL0501',
          raspuns: 'RM09AL0501',
          path: '09/AL/M09AL05/',
        },
        {
          idtest: 'M09AL0502',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL05',
          denumireserie: 'Progresie aritmetica',
          enunt: 'EM09AL0502',
          var1: 'V1M09AL0502',
          var2: 'V2M09AL0502',
          var3: 'V3M09AL0502',
          var4: 'V4M09AL0502',
          raspuns: 'RM09AL0502',
          path: '09/AL/M09AL05/',
        },
        {
          idtest: 'M09AL0503',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL05',
          denumireserie: 'Progresie aritmetica',
          enunt: 'EM09AL0503',
          var1: 'V1M09AL0503',
          var2: 'V2M09AL0503',
          var3: 'V3M09AL0503',
          var4: 'V4M09AL0503',
          raspuns: 'RM09AL0503',
          path: '09/AL/M09AL05/',
        },
        {
          idtest: 'M09AL0504',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL05',
          denumireserie: 'Progresie aritmetica',
          enunt: 'EM09AL0504',
          var1: 'V1M09AL0504',
          var2: 'V2M09AL0504',
          var3: 'V3M09AL0504',
          var4: 'V4M09AL0504',
          raspuns: 'RM09AL0504',
          path: '09/AL/M09AL05/',
        },
        {
          idtest: 'M09AL0505',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL05',
          denumireserie: 'Progresie aritmetica',
          enunt: 'EM09AL0505',
          var1: 'V1M09AL0505',
          var2: 'V2M09AL0505',
          var3: 'V3M09AL0505',
          var4: 'V4M09AL0505',
          raspuns: 'RM09AL0505',
          path: '09/AL/M09AL05/',
        },
        {
          idtest: 'M09AL0601',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL06',
          denumireserie: 'Progresie geometrica',
          enunt: 'EM09AL0601',
          var1: 'V1M09AL0601',
          var2: 'V2M09AL0601',
          var3: 'V3M09AL0601',
          var4: 'V4M09AL0601',
          raspuns: 'RM09AL0601',
          path: '09/AL/M09AL06/',
        },
        {
          idtest: 'M09AL0602',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL06',
          denumireserie: 'Progresie geometrica',
          enunt: 'EM09AL0602',
          var1: 'V1M09AL0602',
          var2: 'V2M09AL0602',
          var3: 'V3M09AL0602',
          var4: 'V4M09AL0602',
          raspuns: 'RM09AL0602',
          path: '09/AL/M09AL06/',
        },
        {
          idtest: 'M09AL0603',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL06',
          denumireserie: 'Progresie geometrica',
          enunt: 'EM09AL0603',
          var1: 'V1M09AL0603',
          var2: 'V2M09AL0603',
          var3: 'V3M09AL0603',
          var4: 'V4M09AL0603',
          raspuns: 'RM09AL0603',
          path: '09/AL/M09AL06/',
        },
        {
          idtest: 'M09AL0604',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL06',
          denumireserie: 'Progresie geometrica',
          enunt: 'EM09AL0604',
          var1: 'V1M09AL0604',
          var2: 'V2M09AL0604',
          var3: 'V3M09AL0604',
          var4: 'V4M09AL0604',
          raspuns: 'RM09AL0604',
          path: '09/AL/M09AL06/',
        },
        {
          idtest: 'M09AL0605',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL06',
          denumireserie: 'Progresie geometrica',
          enunt: 'EM09AL0605',
          var1: 'V1M09AL0605',
          var2: 'V2M09AL0605',
          var3: 'V3M09AL0605',
          var4: 'V4M09AL0605',
          raspuns: 'RM09AL0605',
          path: '09/AL/M09AL06/',
        },
        {
          idtest: 'M09AL0701',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL07',
          denumireserie: 'Functia de gradul al II-lea',
          enunt: 'EM09AL0701',
          var1: 'V1M09AL0701',
          var2: 'V2M09AL0701',
          var3: 'V3M09AL0701',
          var4: 'V4M09AL0701',
          raspuns: 'RM09AL0701',
          path: '09/AL/M09AL07/',
        },
        {
          idtest: 'M09AL0702',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL07',
          denumireserie: 'Functia de gradul al II-lea',
          enunt: 'EM09AL0702',
          var1: 'V1M09AL0702',
          var2: 'V2M09AL0702',
          var3: 'V3M09AL0702',
          var4: 'V4M09AL0702',
          raspuns: 'RM09AL0702',
          path: '09/AL/M09AL07/',
        },
        {
          idtest: 'M09AL0703',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL07',
          denumireserie: 'Functia de gradul al II-lea',
          enunt: 'EM09AL0703',
          var1: 'V1M09AL0703',
          var2: 'V2M09AL0703',
          var3: 'V3M09AL0703',
          var4: 'V4M09AL0703',
          raspuns: 'RM09AL0703',
          path: '09/AL/M09AL07/',
        },
        {
          idtest: 'M09AL0704',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL07',
          denumireserie: 'Functia de gradul al II-lea',
          enunt: 'EM09AL0704',
          var1: 'V1M09AL0704',
          var2: 'V2M09AL0704',
          var3: 'V3M09AL0704',
          var4: 'V4M09AL0704',
          raspuns: 'RM09AL0704',
          path: '09/AL/M09AL07/',
        },
        {
          idtest: 'M09AL0705',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL07',
          denumireserie: 'Functia de gradul al II-lea',
          enunt: 'EM09AL0705',
          var1: 'V1M09AL0705',
          var2: 'V2M09AL0705',
          var3: 'V3M09AL0705',
          var4: 'V4M09AL0705',
          raspuns: 'RM09AL0705',
          path: '09/AL/M09AL07/',
        },
        {
          idtest: 'M09AL0706',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL07',
          denumireserie: 'Functia de gradul al II-lea',
          enunt: 'EM09AL0706',
          var1: 'V1M09AL0706',
          var2: 'V2M09AL0706',
          var3: 'V3M09AL0706',
          var4: 'V4M09AL0706',
          raspuns: 'RM09AL0706',
          path: '09/AL/M09AL07/',
        },
        {
          idtest: 'M09AL0707',
          codclasa: '09',
          codmaterie: 'AL',
          codserie: 'M09AL07',
          denumireserie: 'Functia de gradul al II-lea',
          enunt: 'EM09AL0707',
          var1: 'V1M09AL0707',
          var2: 'V2M09AL0707',
          var3: 'V3M09AL0707',
          var4: 'V4M09AL0707',
          raspuns: 'RM09AL0707',
          path: '09/AL/M09AL07/',
        },
      ],

      answer: [],
      noQuestion: 0,
      img: [],
      theQuestion: '',
      filteredQuestions: [],
      start: true,
      arrayVariants: [],
    };
    // console.log(this.props.match.params.id);
    this.changeQuestion = this.changeQuestion.bind(this);
    this.detFilteredQuestions = this.detFilteredQuestions.bind(this);
    this.shuffleQuestions = this.shuffleQuestions.bind(this);
    this.shuffleVariants = this.shuffleVariants.bind(this);
    // console.log(this.props.match.params.id);
  }

  detFilteredQuestions(filter) {
    console.log(filter);
    console.log(this.state.filteredQuestions);
  }

  componentDidMount() {
    let returnVariants = [];

    const fQuestions = this.state.questions.filter(
      (questions) => questions.codserie === this.props.match.params.id
    );
    //adaug elemente sa fie 10;
    console.log(fQuestions);
    const initialLength = fQuestions.length;
    let prevPosition = 11;
    let randomPosition = 12;
    while (fQuestions.length < 10) {
      do {
        randomPosition = Math.floor(
          Math.random() * Math.floor(fQuestions.length)
        );
        console.log('random position ' + randomPosition);
      } while (randomPosition === prevPosition);
      if (randomPosition < initialLength) {
        fQuestions.push(fQuestions[randomPosition]);
        prevPosition = randomPosition;
      }
    }

    console.log(fQuestions);

    this.shuffleQuestions(fQuestions);

    fQuestions.map((variants) => {
      returnVariants.push(
        this.shuffleVariants([
          variants.idtest,
          variants.raspuns,
          variants.var1,
          variants.var2,
          variants.var3,
          variants.var4,
        ])
      );
      return null;
    });
    console.log(returnVariants);
    this.setState({ filteredQuestions: fQuestions });
    this.setState({ start: false });

    console.log(this.props.match.params.id);
    console.log(this.state.filteredQuestions);
  }

  shuffleQuestions(array) {
    // shuffle the array
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  changeQuestion() {
    this.setState({ noQuestion: this.state.noQuestion + 1 });

    const theQuestion =
      'https://www.matematicon.ro/m/mem/' +
      this.state.filteredQuestions[this.state.noQuestion]['path'] +
      this.state.filteredQuestions[this.state.noQuestion]['enunt'] +
      '.png';
    const img1 =
      'https://www.matematicon.ro/m/mem/' +
      this.state.filteredQuestions[this.state.noQuestion]['path'] +
      this.state.filteredQuestions[this.state.noQuestion]['var1'] +
      '.png';

    const img2 =
      'https://www.matematicon.ro/m/mem/' +
      this.state.filteredQuestions[this.state.noQuestion]['path'] +
      this.state.filteredQuestions[this.state.noQuestion]['var2'] +
      '.png';
    const img3 =
      'https://www.matematicon.ro/m/mem/' +
      this.state.filteredQuestions[this.state.noQuestion]['path'] +
      this.state.filteredQuestions[this.state.noQuestion]['var3'] +
      '.png';

    this.setState({ img: [img1, img2, img3] });
    this.setState({ theQuestion: theQuestion });
    console.log(this.state.noQuestion);
  }

  shuffleVariants(arrVariants) {
    const returnArray = [arrVariants[0], arrVariants[1]];

    // returnArray.push(...arrVariants[1]);
    // take an array of 4 elements, shuffle them and return an array of 2 elements
    let randPosition1 = Math.floor(Math.random() * Math.floor(4));
    let randPosition2 = Math.floor(Math.random() * Math.floor(4));
    console.log(arrVariants[randPosition1]);
    while (randPosition2 === randPosition1) {
      randPosition2 = Math.floor(Math.random() * Math.floor(4));
    }
    returnArray.push(arrVariants[randPosition1 + 1]);
    returnArray.push(arrVariants[randPosition2 + 1]);
    console.log(returnArray);
    return returnArray;
  }

  render() {
    return (
      <Grid
        container
        className={'containerGrid'}
        align='center'
        justify='center'
        alignItems='center'
      >
        <Grid item xs={12} md={8} lg={6} className={'itemGrid'} fixed='true'>
          {this.state.start ? (
            <ButtonGroup orientation='vertical' className={'buttonGroup'}>
              <Question img={this.state.theQuestion} />
              <Answer onClick={this.changeQuestion} img={this.state.img[0]} />
              <Answer onClick={this.changeQuestion} img={this.state.img[1]} />
              <Answer onClick={this.changeQuestion} img={this.state.img[2]} />
            </ButtonGroup>
          ) : (
            <Button
              onClick={() => {
                this.setState({ start: true });
                this.changeQuestion();
              }}
            >
              Start
            </Button>
          )}
        </Grid>
      </Grid>
    );
  }
}

export default Test;
