import * as React from 'react';
import styled from 'styled-components';
import { Route, Redirect, Switch } from 'react-router';

import AlbumList from 'scenes/AlbumList';
import NotFound from 'components/NotFound';
import TrackList from 'scenes/TrackList';
import Header from '../Header';
import Footer from '../Footer';
import MusicPlayer from '../MusicPlayer';
import SongsProvider from '../SongContext/SongsProvider';

const SLayout = styled.div`
  display: flex;
  height: 100%;
`;

const SMain = styled.main`
  align-items: flex-start;
  flex: 1;
  height: calc(100vh - 60px - 100px);
  margin: auto 0;
  min-height: 200px;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  width: 100%;
`;

const Layout = () => (
  <SongsProvider>
    <Header />
    <SLayout>
      <SMain>
        <Switch>
          <Route exact component={NotFound} path="/not-found" />
          <Route exact component={AlbumList} path="/albums" />
          <Route component={TrackList} path="/albums/:id" />
          <Redirect exact from="/" to="/albums" />
          <Redirect to="/not-found" />
        </Switch>
      </SMain>
    </SLayout>
    <Footer>
      <MusicPlayer />
    </Footer>
  </SongsProvider>
);

export default Layout;
