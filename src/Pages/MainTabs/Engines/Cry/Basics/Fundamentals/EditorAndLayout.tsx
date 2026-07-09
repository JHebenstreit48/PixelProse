import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EditorAndLayout = () => {
  const markdownFilePath = 'Engines/Cry/Basics/Fundamentals/EditorAndLayout';

  return (
    <>
      <PageLayout>
        <PageTitle title="Editor & Layout" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EditorAndLayout;
