import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const InputSystem = () => {
  const markdownFilePath = 'Engines/Unity/Basics/InputAndCamera/InputSystem';

  return (
    <>
      <PageLayout>
        <PageTitle title="Input System" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InputSystem;
