import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CameraAndSpringArm = () => {
  const markdownFilePath = 'Engines/Unreal/Basics/InputAndCamera/CameraAndSpringArm';

  return (
    <>
      <PageLayout>
        <PageTitle title="Camera & SpringArm" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CameraAndSpringArm;
