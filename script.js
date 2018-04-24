var Counter = React.createClass({
  
  getInitialState: function(){
    return {
    
      counter: 0
    };
    
  },
  // getInitialState: function() {
  //   console.log('Dzięki tej metodzie określamy początkowy stan naszego kompomentu.')
  // },
  
  increment: function(){
    this.setState({
      counter: this.state.counter + 1
    });
  },
  
  decrement: function(){
    this.setState({
      counter: this.state.counter - 1
    });
  },
  
  // // getDefaultProps: function() {
  // //   console.log('Ustawia domyślne wartości propsow, które nie zostały przekazane do komponentu.');
  // // },

  componentWillMount: function() {
      console.log('Metoda inicjalizuje wykonanie komponentu przed wykonaniem metody render.');
  },
    componentDidMount: function() {
      console.log('Metoda wywolana bezpośrednio po wykonaniu render,możemy na niej wykonywać różne operacje tj: używanie jQuery, manipulacje, pobieranie danych.');
  },
  // // componentWIllReceiveProps: function() {
  // //   console.log('Metoda pozwala aktualizowac stan na podstawie nadchodzących właściwości.');
  // // },

  // // shouldComponentUpdate: function() {
  // //   console.log('Metoda wywoływana tuz przed metoda render sprawdza czy trzeba jeszcze raz przerysować komponent, aby go zoptymalizować.');
  // //   return true;
  // // },

  // // componentWillUnmount: function() {
  // //   console.log('Metoda służąca do wykonania wszystkich rzeczy związanych z odpinaniem timerów, nasłuchiwania zdarzeń na elementach DOM.');
  // // },



      componentWillUpdate: function(nextProps, nextState) {
       // // console.log('Metoda uruchamiana gdy metoda "shouldComponentUpdate" zwróci wartość true; przygotowuje na nadchodzące zmiany.');
        console.log('Stan licznika: ' + nextState.counter);
  },

      componentDidUpdate: function(prevProps, prevState) {
       // // console.log('Metoda uruchamiana jako ostatnia po przerysowaniu komponentu, wykonujemy w niej manipulacje na drzewie DOM.');
        console.log('Poprzedni stan licznika: ' + prevState.counter);
  },


  
  render: function(){
    return (
        React.createElement('div', {className: 'counters'},
             React.createElement('div', {}, 
             React.createElement('h1', {}, 'Counter'),
             React.createElement('button', {
              className: 'button-increment btn btn-lg btn-success', 
                onClick: this.increment},'Press +'),
               React.createElement('span', {className: 'score'}, 'Score : ' + this.state.counter),
          React.createElement('button', {
            className: 'button-decrement btn btn-lg btn-danger', 
            onClick: this.decrement}, 'Press -')
          )
        )
    );
  }
});

var element = React.createElement('div', {className: 'container'},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter)
  
  );

ReactDOM.render(element, document.getElementById('app'));