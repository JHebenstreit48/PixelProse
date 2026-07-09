import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
