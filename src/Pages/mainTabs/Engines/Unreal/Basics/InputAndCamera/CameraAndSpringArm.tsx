import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
