import ExhibitionExploreMap from '../components/ExhibitionExplore/ExhibitionExploreMap';
import ExhibitionExploreCards from '../components/ExhibitionExplore/ExhibitionExploreCards';
import ExhibitionExploreButton from '../components/ExhibitionExplore/ExhibitionExploreButton';
// import Ac from '../components/ExhibitionExplore/ac';

function ExhibitionExplore() {
  return (
    <>
        <ExhibitionExploreButton />
      <div className="row container-fluid m-0 p-0">
        <div className="col-12 col-md-4">
          <ExhibitionExploreCards />
        </div>
        <div className="d-none d-md-block col-md-8 p-0">
          <ExhibitionExploreMap />
        </div>
      </div>
    </>
  );
}
export default ExhibitionExplore;
