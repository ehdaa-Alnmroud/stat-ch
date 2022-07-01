import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
class Containing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "Jacoby Ballard",
      bio: "Jacoby Ballard is a social justice educator and yoga teacher who leads workshops and trainings around the country on diversity, equity, and inclusion. As a yoga teacher with 20 years of experience",
      imgSrc: "./img/Teacher.png",
      profession: "PRACTICE | MEDITATION",
      digit: 0,
    };
  }
  componentDidMount = () => {
    console.log("hello did mount");
    this.mytimer = setInterval(() => {
      this.setState({ digit: this.state.digit + 1 });
    }, 1000);
  };

  componentWillUnmount = () => {
    console.log("hello will unmount");

    this.setState({ digit: 0 });
  };

  render() {
    return (
      <div className="Teacheriv">
        <div>
          {/* <img className="Teachimg" src={this.state.imgSrc} alt="Teacher" />

          <br />

          <span>
            {" "}
            <svg
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{
                height: "20px",
                width: "25px",
                color: "rgb(255, 255, 255)",
              }}
            >
              <path d="M15 5h-3V2H3v16h12V5zM3 0h10l4 4v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm2 12v-2h8v2H5zm0 4v-2h5v2H5zm0-8V6h8v2H5z" />
            </svg>{" "}
            {this.state.fullName}
          </span>
          <br />
          {this.state.profession}
          <br />
          {this.state.bio}
          <br />
          <h6>the component lifecycle: {this.state.digit}</h6> */}
        </div>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            className="Teacher"
            variant="top"
            src={this.state.imgSrc}
            alt="Teacher"
          />
          <Card.Body>
            <Card.Title>
              <span>
                <svg
                  className="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{
                    height: "20px",
                    width: "25px",
                    color: "rgb(255,80,45)",
                    fill: "rgb(255,80,45)",
                  }}
                >
                  <path d="M15 5h-3V2H3v16h12V5zM3 0h10l4 4v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm2 12v-2h8v2H5zm0 4v-2h5v2H5zm0-8V6h8v2H5z" />
                </svg>
                {this.state.fullName}
              </span>
            </Card.Title>
            <Card.Text>
              <h4>
                <span>profession: </span>
                {this.state.profession}
              </h4>
              <h4>
                <span>bio: </span>
                {this.state.bio}
              </h4>
              <br />
              <h4>
                <span>the component lifecycle:</span> {this.state.digit}
              </h4>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Containing;
