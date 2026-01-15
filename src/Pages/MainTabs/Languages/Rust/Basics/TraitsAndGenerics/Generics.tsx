import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Generics = () => {
  const markdownFilePath = 'Languages/Rust/Basics/TraitsAndGenerics/Generics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Generics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Generics;
