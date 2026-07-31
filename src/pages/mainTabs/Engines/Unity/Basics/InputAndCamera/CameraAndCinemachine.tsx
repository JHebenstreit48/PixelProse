import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
