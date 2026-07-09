import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Generics = () => {
  const markdownFilePath = 'Languages/Rust/Basics/TraitsAndGenerics/Generics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Generics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Generics;
