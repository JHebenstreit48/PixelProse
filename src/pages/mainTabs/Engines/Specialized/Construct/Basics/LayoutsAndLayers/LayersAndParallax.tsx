import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LayersAndParallax = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Basics/LayoutsAndLayers/LayersAndParallax';

  return (
    <>
      <PageLayout>
        <PageTitle title="Layers & Parallax" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LayersAndParallax;
