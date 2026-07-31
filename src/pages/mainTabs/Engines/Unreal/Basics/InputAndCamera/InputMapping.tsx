import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
