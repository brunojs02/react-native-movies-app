import React, { PureComponent } from 'react';
import { api } from '~/services';
import { List, Loading, Person } from '~/components';

class PopularPersonList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    api.get('person/popular')
      .then(({ data: { results } }) => this.setState({ loading: false, movies: results }))
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { loading, movies } = this.state;

    if (loading) {
      return (
        <Loading />
      );
    }

    return (
      <List
        data={movies}
        title="Popular Persons"
        subtitle="Most popular persons"
        onViewAllPress={() => {}}
        renderItem={({ item: { name, profile_path: profilePath } }) => (
          <Person
            name={name}
            profilePath={profilePath}
          />
        )}
      />
    );
  }
}

export default PopularPersonList;
