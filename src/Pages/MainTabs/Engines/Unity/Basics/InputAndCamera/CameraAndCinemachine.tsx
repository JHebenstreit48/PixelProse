import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const CameraAndCinemachine = () => {
  const markdownFilePath = 'Engines/Unity/Basics/InputAndCamera/CameraAndCinemachine';

  return (
    <>
      <PageLayout>
        <PageTitle title="Camera & Cinemachine" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CameraAndCinemachine;
