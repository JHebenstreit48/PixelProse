import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
