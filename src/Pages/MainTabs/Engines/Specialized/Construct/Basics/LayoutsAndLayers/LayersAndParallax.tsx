import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
