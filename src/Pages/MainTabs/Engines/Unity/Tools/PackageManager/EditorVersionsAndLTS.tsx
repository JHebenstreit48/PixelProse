import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
