class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      current: this.f1
    };
    this.f1 = this.f1.bind(this);
    this.f2 = this.f2.bind(this);
    this.f3 = this.f3.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    var updateCurrent = this.state.position + 1;
    var arr = [this.f1, this.f2, this.f3];
    var url = '/checkout';
    console.log('something');

    try {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          test: 0
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (err) {
      console.log('Error: ', err);
    }

    if (updateCurrent > 2) {
      console.log('handle soemthing');
    } else {
      this.setState({
        position: updateCurrent,
        current: arr[updateCurrent]
      });
    }

    event.preventDefault();
  }

  handleChange(event) {}

  f1() {
    return React.createElement("div", null, React.createElement("div", null, React.createElement("ul", null, React.createElement("label", null, "Name: ", React.createElement("input", {
      type: "text",
      name: "name"
    }))), React.createElement("ul", null, React.createElement("label", null, "Email: ", React.createElement("input", {
      type: "text",
      name: "email"
    }))), React.createElement("ul", null, React.createElement("label", null, "Password: ", React.createElement("input", {
      type: "text",
      name: "password"
    })))), React.createElement("div", null, React.createElement("input", {
      type: "submit",
      value: "Next",
      onClick: this.handleOnClick
    })));
  }

  f2() {
    return React.createElement("div", null, React.createElement("div", null, React.createElement("ul", null, React.createElement("label", null, "line 1: ", React.createElement("input", {
      type: "text",
      name: "line1"
    }))), React.createElement("ul", null, React.createElement("label", null, "line 2: ", React.createElement("input", {
      type: "text",
      name: "line2"
    }))), React.createElement("ul", null, React.createElement("label", null, "City: ", React.createElement("input", {
      type: "text",
      name: "city"
    }))), React.createElement("ul", null, React.createElement("label", null, "State: ", React.createElement("input", {
      type: "text",
      name: "state"
    }))), React.createElement("ul", null, React.createElement("label", null, "Zip Code: ", React.createElement("input", {
      type: "text",
      name: "zip"
    })))), React.createElement("div", null, React.createElement("input", {
      type: "submit",
      value: "Next"
    })));
  }

  f3() {
    return React.createElement("div", null, React.createElement("div", null, React.createElement("ul", null, React.createElement("label", null, "Credit Card #: ", React.createElement("input", {
      type: "text",
      name: "line1"
    }))), React.createElement("ul", null, React.createElement("label", null, "Expiry Date: ", React.createElement("input", {
      type: "text",
      name: "line2"
    }))), React.createElement("ul", null, React.createElement("label", null, "CCV: ", React.createElement("input", {
      type: "text",
      name: "city"
    }))), React.createElement("ul", null, React.createElement("label", null, "State: ", React.createElement("input", {
      type: "text",
      name: "state"
    }))), React.createElement("ul", null, React.createElement("label", null, "Zip Code: ", React.createElement("input", {
      type: "text",
      name: "zip"
    })))), React.createElement("div", null, React.createElement("input", {
      type: "submit",
      value: "Submit"
    })));
  }

  render() {
    return React.createElement("div", null, React.createElement("h1", null, "Check Out"), React.createElement("form", {
      onClick: this.handleOnClick
    }, this.state.current()));
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwicG9zaXRpb24iLCJjdXJyZW50IiwiZjEiLCJiaW5kIiwiZjIiLCJmMyIsImhhbmRsZU9uQ2xpY2siLCJldmVudCIsInVwZGF0ZUN1cnJlbnQiLCJhcnIiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRlc3QiLCJoZWFkZXJzIiwiZXJyIiwic2V0U3RhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNoYW5nZSIsInJlbmRlciIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsR0FBTixTQUFrQkMsS0FBSyxDQUFDQyxTQUF4QixDQUFpQztBQUMvQkMsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQU87QUFDaEIsVUFBTUEsS0FBTjtBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxRQUFRLEVBQUUsQ0FEQztBQUVYQyxNQUFBQSxPQUFPLEVBQUUsS0FBS0M7QUFGSCxLQUFiO0FBS0EsU0FBS0EsRUFBTCxHQUFVLEtBQUtBLEVBQUwsQ0FBUUMsSUFBUixDQUFhLElBQWIsQ0FBVjtBQUNBLFNBQUtDLEVBQUwsR0FBVSxLQUFLQSxFQUFMLENBQVFELElBQVIsQ0FBYSxJQUFiLENBQVY7QUFDQSxTQUFLRSxFQUFMLEdBQVUsS0FBS0EsRUFBTCxDQUFRRixJQUFSLENBQWEsSUFBYixDQUFWO0FBQ0EsU0FBS0csYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CSCxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNEOztBQUVERyxFQUFBQSxhQUFhLENBQUNDLEtBQUQsRUFBTztBQUNsQixRQUFJQyxhQUFhLEdBQUcsS0FBS1QsS0FBTCxDQUFXQyxRQUFYLEdBQXNC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RixFQUVFLGdDQUFJLG9EQUFvQjtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxJQUFJLEVBQUM7QUFBeEIsTUFBcEIsQ0FBSixDQUZGLEVBR0UsZ0NBQUksNENBQVk7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDO0FBQXhCLE1BQVosQ0FBSixDQUhGLEVBSUUsZ0NBQUksOENBQWM7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDO0FBQXhCLE1BQWQsQ0FBSixDQUpGLEVBS0UsZ0NBQUksaURBQWlCO0FBQU8sTUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFBLElBQUksRUFBQztBQUF4QixNQUFqQixDQUFKLENBTEYsQ0FERixFQVFFLGlDQUFLO0FBQU8sTUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixNQUFBLEtBQUssRUFBQztBQUEzQixNQUFMLENBUkYsQ0FERjtBQVlEOztBQUVEbUIsRUFBQUEsTUFBTSxHQUFFO0FBQ04sV0FDRSxpQ0FDRSw0Q0FERixFQUVFO0FBQU0sTUFBQSxPQUFPLEVBQUUsS0FBS2xCO0FBQXBCLE9BQ0csS0FBS1AsS0FBTCxDQUFXRSxPQUFYLEVBREgsQ0FGRixDQURGO0FBUUQ7O0FBakc4Qjs7QUFvR2pDd0IsUUFBUSxDQUFDRCxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBd0JFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwb3NpdGlvbjogMCxcbiAgICAgIGN1cnJlbnQ6IHRoaXMuZjFcbiAgICB9XG5cbiAgICB0aGlzLmYxID0gdGhpcy5mMS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZjIgPSB0aGlzLmYyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mMyA9IHRoaXMuZjMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU9uQ2xpY2sgPSB0aGlzLmhhbmRsZU9uQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZU9uQ2xpY2soZXZlbnQpe1xuICAgIHZhciB1cGRhdGVDdXJyZW50ID0gdGhpcy5zdGF0ZS5wb3NpdGlvbiArIDE7XG4gICAgdmFyIGFyciA9IFt0aGlzLmYxLCB0aGlzLmYyLCB0aGlzLmYzXTtcbiAgICB2YXIgdXJsID0gJy9jaGVja291dCc7XG5cbiAgICBjb25zb2xlLmxvZygnc29tZXRoaW5nJylcblxuICAgIHRyeXtcbiAgICAgIGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3Rlc3Q6IDB9KSxcbiAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycik7XG4gICAgfVxuXG4gICAgaWYodXBkYXRlQ3VycmVudCA+IDIpe1xuICAgICAgY29uc29sZS5sb2coJ2hhbmRsZSBzb2VtdGhpbmcnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtwb3NpdGlvbjogdXBkYXRlQ3VycmVudCwgY3VycmVudDogYXJyW3VwZGF0ZUN1cnJlbnRdfSk7XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCl7XG5cbiAgfVxuXG4gIGYxKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHVsPjxsYWJlbD5OYW1lOiA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nbmFtZScvPjwvbGFiZWw+PC91bD5cbiAgICAgICAgICA8dWw+PGxhYmVsPkVtYWlsOiA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nZW1haWwnLz48L2xhYmVsPjwvdWw+XG4gICAgICAgICAgPHVsPjxsYWJlbD5QYXNzd29yZDogPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J3Bhc3N3b3JkJy8+PC9sYWJlbD48L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj48aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT0nTmV4dCcgb25DbGljaz17dGhpcy5oYW5kbGVPbkNsaWNrfS8+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgZjIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8dWw+PGxhYmVsPmxpbmUgMTogPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J2xpbmUxJy8+PC9sYWJlbD48L3VsPlxuICAgICAgICAgIDx1bD48bGFiZWw+bGluZSAyOiA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nbGluZTInLz48L2xhYmVsPjwvdWw+XG4gICAgICAgICAgPHVsPjxsYWJlbD5DaXR5OiA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nY2l0eScvPjwvbGFiZWw+PC91bD5cbiAgICAgICAgICA8dWw+PGxhYmVsPlN0YXRlOiA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nc3RhdGUnLz48L2xhYmVsPjwvdWw+XG4gICAgICAgICAgPHVsPjxsYWJlbD5aaXAgQ29kZTogPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J3ppcCcvPjwvbGFiZWw+PC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+PGlucHV0IHR5cGU9J3N1Ym1pdCcgdmFsdWU9J05leHQnLz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBmMygpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDx1bD48bGFiZWw+Q3JlZGl0IENhcmQgIzogPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J2xpbmUxJyAvPjwvbGFiZWw+PC91bD5cbiAgICAgICAgICA8dWw+PGxhYmVsPkV4cGlyeSBEYXRlOiA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nbGluZTInLz48L2xhYmVsPjwvdWw+XG4gICAgICAgICAgPHVsPjxsYWJlbD5DQ1Y6IDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdjaXR5Jy8+PC9sYWJlbD48L3VsPlxuICAgICAgICAgIDx1bD48bGFiZWw+U3RhdGU6IDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdzdGF0ZScvPjwvbGFiZWw+PC91bD5cbiAgICAgICAgICA8dWw+PGxhYmVsPlppcCBDb2RlOiA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nemlwJy8+PC9sYWJlbD48L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj48aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT0nU3VibWl0Jy8+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5DaGVjayBPdXQ8L2gxPlxuICAgICAgICA8Zm9ybSBvbkNsaWNrPXt0aGlzLmhhbmRsZU9uQ2xpY2t9PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJlbnQoKX1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==