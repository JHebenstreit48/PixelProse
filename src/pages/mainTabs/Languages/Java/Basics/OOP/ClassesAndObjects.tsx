import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
