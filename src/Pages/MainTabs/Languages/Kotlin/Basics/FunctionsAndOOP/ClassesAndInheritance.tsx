import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ClassesAndInheritance = () => {
  const markdownFilePath = 'Languages/Kotlin/Basics/FunctionsAndOOP/ClassesAndInheritance';

  return (
    <>
      <PageLayout>
        <PageTitle title="Classes & Inheritance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ClassesAndInheritance;
