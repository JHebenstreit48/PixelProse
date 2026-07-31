import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
