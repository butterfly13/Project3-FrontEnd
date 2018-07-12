constructor(props) {
    super(props);
    this.state = {
      newLunchTopic: "",
      newEntry: "",
      weekNumber: null
    };

    if (window.location.origin === "http://localhost:3000") {
      this.origin = "http://localhost:4000";
    } else {
      this.origin = "https://boiling-dusk-74498.herokuapp.com";
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewEntry = this.handleNewEntry.bind(this);
    this.handleNewTopic = this.handleNewTopic.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleNewTopic() {
    if (this.state.newLunchTopic.length > 3) {
      const newLunchTopic = {
        content: this.state.newLunchTopic
      };
      axios
        .post(`${this.origin}`, { newLunchTopic })
        .then(res => {
          console.log(res);
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    // to clear out the input form after the user hits submit
    this.setState({
      newLunchTopic: ""
    });
  }

  handleNewEntry() {
    console.log(this.state.weekNumber);
    if (
      this.state.weekNumber > 0 &&
      this.state.weekNumber < 13 &&
      this.state.newEntry.length > 3
    ) {
      axios
        .post(`${this.origin}/entry`, {
          weekNumber: this.state.weekNumber,
          content: this.state.newEntry
        })
        .then(res => {
          console.log(`in handleNewEntry`);
        });
    }
    // to clear out the input form after the user hits submit
    this.setState({
      newEntry: "",
      weekNumber: null
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleNewTopic();
    this.handleNewEntry();
    this.props.history.push("/entry");
  }