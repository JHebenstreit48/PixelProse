import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ClassesAndInheritance = () => {
  const markdownFilePath = 'Languages/Swift/Basics/ValueAndOOP/ClassesAndInheritance';

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
