import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Metatables = () => {
  const markdownFilePath = 'Languages/Lua/Advanced/Metaprogramming/Metatables';

  return (
    <>
      <PageLayout>
        <PageTitle title="Metatables" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Metatables;
