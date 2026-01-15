import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CameraAndCinemachine = () => {
  const markdownFilePath = 'Engines/Unity/Basics/InputAndCamera/CameraAndCinemachine';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Camera & Cinemachine" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CameraAndCinemachine;
