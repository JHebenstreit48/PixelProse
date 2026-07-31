import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
