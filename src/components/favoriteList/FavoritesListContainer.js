import React from "react";
import { loadFavorites } from "../../favorite/action";
import { connect } from "react-redux";
import FavoritesList from "./FavoritesList";

class FavoriteListContainer extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.props.loadFavorites().then(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <>
            <FavoritesList
              favorites={this.props.favorites}
              user={this.props.user}
            />
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser,
    favorites: state.favorites
  };
};

export default connect(mapStateToProps, {
  loadFavorites
})(FavoriteListContainer);
