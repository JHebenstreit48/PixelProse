import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
