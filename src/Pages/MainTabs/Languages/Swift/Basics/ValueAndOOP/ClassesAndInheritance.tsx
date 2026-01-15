import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ClassesAndInheritance = () => {
  const markdownFilePath = 'Languages/Swift/Basics/ValueAndOOP/ClassesAndInheritance';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Classes & Inheritance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ClassesAndInheritance;
