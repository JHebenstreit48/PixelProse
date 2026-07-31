import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
