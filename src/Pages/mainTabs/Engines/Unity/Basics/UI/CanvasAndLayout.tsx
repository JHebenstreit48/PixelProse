import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const CanvasAndLayout = () => {
  const markdownFilePath = 'Engines/Unity/Basics/UI/CanvasAndLayout';

  return (
    <>
      <PageLayout>
        <PageTitle title="Canvas & Layout" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CanvasAndLayout;
