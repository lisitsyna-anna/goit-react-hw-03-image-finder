import { Component } from 'react';

import { MagnifyingGlass } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { ButtonLoadMore } from 'components/ButtonLoadMore';

import { StyledApp } from './App.styled';
import * as API from '../../services/pixabayAPI';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    error: false,
    totalImages: 0,
  };
  // Ф-ция, которую передаем пропсом в форму и там ее вызываем при сабмите с параметром query
  // и устанавливаем новое квери сбрасываем при этом images
  handleSubmit = query => {
    if (query.trim() === '') {
      toast.error('Enter a search term');
      return;
    }
    this.setState({
      images: [],
      page: 1,
      query,
    });
  };

  // Ф-ция, которую пропосм передаем на кнопку Load More, вызываеться при клике
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  // При обновлении стейта (или новый сабмит, или клик на конпку load more) - делаем запрос с соответсвующими параметрами
  async componentDidUpdate(_, prevState) {
    const { query: currentQuery, page: currentPage } = this.state;
    const { query: prevQuery, page: prevPage } = prevState;

    if (prevQuery !== currentQuery) {
      try {
        this.setState({ isLoading: true });

        const { hits: images, total: totalImages } = await API.getImages(
          currentQuery,
          currentPage
        );

        if (images.length === 0) {
          toast.error('There are no images matching your request.');
        }

        this.setState({ images, isLoading: false, totalImages });
      } catch (error) {
        this.setState({ error: true, isLoading: false });
        console.log(error);
      }
    } else if (prevPage !== this.state.page) {
      try {
        this.setState({ isLoading: true });

        const { hits: images } = await API.getImages(currentQuery, currentPage);

        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          isLoading: false,
        }));
      } catch (error) {
        this.setState({ error: true, isLoading: false });
        console.log(error);
      }
    }
  }

  render() {
    const { images, isLoading, error, totalImages, page } = this.state;
    return (
      <StyledApp>
        <Searchbar onSubmit={this.handleSubmit} />
        <ToastContainer position="top-right" autoClose={3000} />

        {error && <p>Oops! Something went wrong. Try reloading the page</p>}

        <ImageGallery images={images} />

        <MagnifyingGlass
          visible={isLoading && true}
          height="100"
          width="100"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{
            margin: '0 auto',
          }}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#3f51b5"
        />

        {images.length > 0 && totalImages - page * 12 > 0 && (
          <ButtonLoadMore onLoadMore={this.handleLoadMore} />
        )}
      </StyledApp>
    );
  }
}
