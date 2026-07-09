import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
