import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Optionals = () => {
  const markdownFilePath = 'Languages/Swift/Basics/OptionalsAndErrors/Optionals';

  return (
    <>
      <PageLayout>
        <PageTitle title="Optionals" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Optionals;
