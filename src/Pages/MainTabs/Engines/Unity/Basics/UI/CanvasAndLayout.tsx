import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
