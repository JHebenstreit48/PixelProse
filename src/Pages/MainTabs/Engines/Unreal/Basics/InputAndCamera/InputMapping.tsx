import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InputMapping = () => {
  const markdownFilePath = 'Engines/Unreal/Basics/InputAndCamera/InputMapping';

  return (
    <>
      <PageLayout>
        <PageTitle title="Input Mapping" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InputMapping;
