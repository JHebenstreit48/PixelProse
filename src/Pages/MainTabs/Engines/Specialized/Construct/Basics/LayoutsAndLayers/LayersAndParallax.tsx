import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LayersAndParallax = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Basics/LayoutsAndLayers/LayersAndParallax';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Layers & Parallax" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LayersAndParallax;
