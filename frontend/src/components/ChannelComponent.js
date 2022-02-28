import ChannelService from "../services/ChannelService";
import React from "react";

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: [],
    };
  }

  componentDidMount() {
    ChannelService.getChannels().then((response) => {
      this.setState({ channel: response.data });
    });
  }
  render() {
    return (
      <div>
        <h1 className="text-center"> Channel List </h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Channel Id</td>
              <td> Name</td>
              <td> Rating</td>
              <td> Reviews </td>
            </tr>
          </thead>
          <tbody>
            {this.state.channel.map((channel) => (
              <tr key={channel.id}>
                <td> {channel.id} </td>
                <td> {channel.name}</td>
                <td> {channel.rating} </td>
                {channel.reviews.map((review) => (
                  <td>{review.comment}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserComponent;
