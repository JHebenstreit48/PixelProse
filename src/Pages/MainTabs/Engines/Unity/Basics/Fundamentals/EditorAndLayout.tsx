import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const EditorAndLayout = () => {
  const markdownFilePath = 'Engines/Unity/Basics/Fundamentals/EditorAndLayout';

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
