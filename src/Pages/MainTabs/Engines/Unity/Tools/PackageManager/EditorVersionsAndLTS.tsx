import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EditorVersionsAndLTS = () => {
  const markdownFilePath = 'Engines/Unity/Tools/PackageManager/EditorVersionsAndLTS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Editor Versions & LTS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EditorVersionsAndLTS;
