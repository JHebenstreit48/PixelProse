import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CameraAndSpringArm = () => {
  const markdownFilePath = 'Engines/Unreal/Basics/InputAndCamera/CameraAndSpringArm';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Camera & SpringArm" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CameraAndSpringArm;
