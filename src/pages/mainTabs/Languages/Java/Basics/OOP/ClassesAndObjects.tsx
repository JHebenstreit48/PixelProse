import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ClassesAndObjects = () => {
  const markdownFilePath = 'Languages/Java/Basics/OOP/ClassesAndObjects';

  return (
    <>
      <PageLayout>
        <PageTitle title="Classes & Objects" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ClassesAndObjects;
