import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CanvasAndLayout = () => {
  const markdownFilePath = 'Engines/Unity/Basics/UI/CanvasAndLayout';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Canvas & Layout" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CanvasAndLayout;
