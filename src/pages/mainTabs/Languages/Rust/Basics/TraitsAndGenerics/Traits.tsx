import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Traits = () => {
  const markdownFilePath = 'Languages/Rust/Basics/TraitsAndGenerics/Traits';

  return (
    <>
      <PageLayout>
        <PageTitle title="Traits (Basics)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Traits;
