import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EditorVersionsAndLTS = () => {
  const markdownFilePath = 'Engines/Unity/Tools/PackageManager/EditorVersionsAndLTS';

  return (
    <>
      <PageLayout>
        <PageTitle title="Editor Versions & LTS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EditorVersionsAndLTS;
