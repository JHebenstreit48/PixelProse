import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
